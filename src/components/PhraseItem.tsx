import { Box, Card, Typography } from "@mui/material";
import KebabMenu from "./KebabMenu";
import { PHRASE_KEBAB_MENU } from "../shared/constants/menu-kebab.const";
import { ItemKebabMenu } from "../shared/interfaces/menu-kebab.interface";
import { ActionKebab } from "../shared/enums/action-kebab.enum";
import { useDispatch } from "react-redux";
import {
  LoaderState,
  Phase,
  setLoader,
  setPhraseSelected,
} from "../store/features/phrasesSlice";
import { REMOVE_PHRASE } from "../graphql/phases/mutations";
import { useMutation, useQuery } from "@apollo/client";
import { GET_PHRASE } from "../graphql/phases/queries";

export interface PhraseItemProps {
  index: number;
  data: Phase;
}

function PhraseItem(props: PhraseItemProps) {
  const { id, title, description } = props.data;
  const dispatch = useDispatch();
  const [removePhase] = useMutation(REMOVE_PHRASE);
  const { data, refetch } = useQuery(GET_PHRASE, {
    variables: {
      id,
    },
  });

  const remove = (): void => {
    dispatch(
      setLoader({
        loader: LoaderState.LOADING,
      })
    );

    removePhase({
      variables: {
        id,
      },
    })
      .then((response) => {
        dispatch(
          setLoader({
            loader: LoaderState.RELOAD,
          })
        );
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

  const preview = (): void => {
    dispatch(
      setPhraseSelected({
        selected: props.data,
      })
    );
  };

  const onCallback = (option: ItemKebabMenu) => {
    switch (option.id) {
      case ActionKebab.REMOVE:
        remove();
        break;
      case ActionKebab.EDIT:
        break;
      case ActionKebab.PREVIEW:
        preview();
        break;
      default:
        break;
    }
  };

  const handleClick = () => {
    preview();
  };

  return (
    <Card
      className="w-100 d-flex-col align-items-start cursor-pointer"
      sx={{
        minWidth: 200,
        maxWidth: 400,
        marginBottom: "1rem",
        padding: "15px 10px",
        marginLeft: "2rem",
      }}
      onClick={handleClick}
      key={props.index}
    >
      <Box className="d-flex d-flex-justify-between align-items-start w-100">
        <Box className="d-flex-col align-items-start">
          <Typography
            className="f-bold f-16"
            sx={{
              marginBottom: "5px",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              textAlign: "start",
            }}
          >
            {description}
          </Typography>
        </Box>
        <Box>
          <KebabMenu
            options={PHRASE_KEBAB_MENU}
            callback={onCallback}
          ></KebabMenu>
        </Box>
      </Box>
    </Card>
  );
}

export default PhraseItem;
