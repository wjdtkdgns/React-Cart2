import { Fragment } from "react";
import { useListData } from "../../hooks/useListData";
import ListItem from "./ListItem";

const ListItems = () => {
  const { status, data } = useListData();
  let content;

  if (status === "loading") {
    content = <p>Loading...</p>;
  }
  if (status === "error") {
    content = <p>Error</p>;
  }
  if (status === "success") {
    content = (
      <Fragment>
        {data.data.list.map(
          (
            obj: {
              id: number;
              title: string;
              content: string;
            },
            index: number
          ): JSX.Element => (
            <Fragment key={index}>
              <ListItem {...obj} />
            </Fragment>
          )
        )}
      </Fragment>
    );
  }
  return <Fragment>{content}</Fragment>;
};
export default ListItems;
