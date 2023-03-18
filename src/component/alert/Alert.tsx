import { notification } from "antd";

export const AlertError = (props: { title?: string, description: string }) => {
  const { description, title } = props;
  return notification.error({ message: title ?? "Error", description });
};
