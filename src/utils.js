export function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

export function stringAvatar(name) {
  const nameParts = name.split(" ");
  let initials = "";

  if (nameParts.length === 1) {
    initials = (`${nameParts[0][0]}${nameParts[0][1] || ""}`).toUpperCase();
  } else {
    initials = `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase();
  }

  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: initials,
  };
}

//from https://mui.com/material-ui/react-avatar/