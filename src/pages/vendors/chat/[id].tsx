import Chip from "@/components/Chip";
import VendorInfoBox from "@/components/vendors/VenderInfoBox";
import { api } from "@/utils/api";
import { faker } from "@faker-js/faker";
import {
  IconLicense,
  IconPhotoPlus,
  IconSend,
  IconSquareRotatedForbid,
} from "@tabler/icons-react";
import clsx from "clsx";
import Link from "next/link";
import { type ReactElement, useEffect, useState } from "react";
import { toast } from "react-toastify";

function VendorChipWithIcon(props: { icon: ReactElement; label: string }) {
  return (
    <div
      className={clsx(
        "rounded-full bg-black px-6 py-1 text-white",
        "flex items-center gap-1"
      )}
    >
      {props.icon}
      {props.label}
    </div>
  );
}

interface ChatData {
  contents: {
    message: string;
    fromMe: boolean;
    isSigned: boolean;
  };
  transactionId: string;
}

function ChatBox(props: {
  message: string;
  fromMe: boolean;
  transactionId: string;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col",
        props.fromMe ? "items-end" : "items-start"
      )}
    >
      <div
        className={clsx(
          "w-[70%] rounded-lg rounded-t-lg px-6 py-2 text-black",
          props.fromMe ? "self-end" : "self-start",
          "bg-[#9fc2d1]",
          "flex items-center gap-2"
        )}
      >
        <span className="w-full">{props.message}</span>

        <Link
          target="_blank"
          rel="noreferrer noopener"
          href={`https://hashscan.io/testnet/transaction/${props.transactionId}`}
          className="px-2 py-2"
        >
          <IconSquareRotatedForbid />
        </Link>
      </div>
    </div>
  );
}

export default function VendorChatPage() {
  const { data: chatDataFromHedera } = api.hedera.getTopic.useQuery({
    subTopic: "chat",
  });
  const addMessageMutation = api.hedera.addMessage.useMutation();

  const [chatData, setChatData] = useState<ChatData[]>([]);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    const localChatData = chatDataFromHedera?.messages.map((message) => ({
      ...message,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      contents: JSON.parse(message.contents),
    }));

    setChatData(localChatData ?? []);
  }, [chatDataFromHedera]);

  const addChatData = async (isSigned = false) => {
    if (!inputMessage) return;

    const { transactionId } = await addMessageMutation.mutateAsync({
      subTopic: "chat",
      message: JSON.stringify({
        message: inputMessage,
        isSigned,
        fromMe: true,
      }),
    });

    setChatData((prev) => [
      ...prev,
      {
        contents: {
          message: inputMessage,
          isSigned,
          fromMe: true,
        },
        transactionId,
      },
    ]);

    toast.success(`Message sent! TxID: ${transactionId}`);
  };

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="w-fit">
        <Chip label="Vendors" className="bg-[#FF8577] text-2xl font-bold" />
      </div>

      <div className="flex h-full w-full flex-1 flex-col gap-4 overflow-y-auto rounded-2xl bg-[#C0DE77] px-4 py-4">
        <VendorInfoBox title="SomeTitle" />

        <div className="flex h-full flex-col gap-4">
          <div className="rounded- flex flex-1 flex-col gap-2 bg-[#D7ECF4] px-4 py-4">
            {/* add chats */}
            {chatData.map((chat) => (
              <ChatBox
                key={chat.transactionId}
                message={chat.contents.message}
                fromMe={chat.contents.fromMe}
                transactionId={chat.transactionId}
              />
            ))}
          </div>

          <div className="flex items-center justify-between gap-4 rounded-xl bg-[#9FC2D1] px-4 py-2">
            <div className="flex flex-1 items-center gap-4">
              <input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => setInputMessage(e.currentTarget.value)}
                onKeyUp={(e) => setInputMessage(e.currentTarget.value)}
                className="w-full rounded-md bg-[#d7ecf4] px-4 py-1"
                placeholder=""
                type="text"
              />

              <button onClick={() => void addChatData()}>
                <VendorChipWithIcon
                  label="Send"
                  icon={<IconSend color="#D6F18E" />}
                />
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button>
                <VendorChipWithIcon
                  label="Message Agreement"
                  icon={<IconLicense color="#D6F18E" />}
                />
              </button>
              <button>
                <VendorChipWithIcon
                  label="Image"
                  icon={<IconPhotoPlus color="#D6F18E" />}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
