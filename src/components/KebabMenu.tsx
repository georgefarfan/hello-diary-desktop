import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ItemKebabMenu } from "../shared/interfaces/menu-kebab.interface";
import { useTranslation } from "react-i18next";

interface KebabMenuProps {
  options: ItemKebabMenu[];
  callback: (option: ItemKebabMenu) => void;
}

export default function KebabMenu(props: KebabMenuProps) {
  const { t } = useTranslation();
  const { options, callback } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSelect = (option: ItemKebabMenu) => {
    handleClose();
    callback(option);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map((option: ItemKebabMenu) => (
          <MenuItem key={option.id} onClick={() => onSelect(option)}>
            {t(option.name)}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
