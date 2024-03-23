import { Text } from "./Text";

interface Props {
  className?: string;
  password?: string;
}

export default function SignUpStackpassword({ password = "Password", ...props }: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start w-full">
        <Text as="p" className="ml-4 md:ml-0 !font-normal z-[1]">
          {password}
        </Text>
        <div className="flex self-stretch mt-[-9px] pl-4 pr-[35px] gap-px py-4 sm:pr-5 text-gray-900_01 text-left text-base border-gray-600 border border-solid bg-white-A700 rounded">
          •••••••••••••••••••••••••
        </div>
      </div>
      <div className="h-[17px] w-[12%] left-[12.00px] top-[0.16px] m-auto bg-white-A700 absolute" />
    </div>
  );
}
