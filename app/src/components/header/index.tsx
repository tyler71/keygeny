import React from "react";
import {
  ActionIcon, Badge,
  Group,
  Header as MantineHeader,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import {HamburgerMenu} from "@refinedev/mantine";
import useAppStateStore from "../../_util/appState";

type IUser = {
  id: number;
  name: string;
  avatar: string;
};

export const Header: React.FC = () => {
  const apiUrl = useAppStateStore(state => state.apiUrl);
  // const { data: user } = useGetIdentity<IUser>();

  const theme = useMantineTheme();

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const borderColor = dark ? theme.colors.dark[6] : theme.colors.gray[2];

  return (
    <MantineHeader
      zIndex={199}
      height={64}
      py={6}
      px="sm"
      sx={{ borderBottom: `1px solid ${borderColor}`, position: "sticky", top: 0, zIndex: 1, }}
    >
      <Group
        position="apart"
        align="center"
        sx={{ height: "100%", }}
      >

      <Group
        position="left"
        align="center"
        sx={{ height: "100%", }}
      >
        <HamburgerMenu />
        <ActionIcon
          variant="outline"
          color={dark ? "yellow" : "primary"}
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
        >
          {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
        </ActionIcon>
      </Group>
      <Group
        position={"right"}
        align="center"
        sx={{ height: "100%", }}
      >
        <a target={"_blank"} title={"Visit the author's website, he worked hard on Keygeny!"} href={"https://tylery.com"}><Badge variant={"outline"}>Tyler's Site 😁</Badge></a>
        <a target={"_blank"} href={"https://keygen.sh/docs/api/"}><Badge variant={"outline"}>API Docs</Badge></a>
        {
          apiUrl &&
          <Badge>{apiUrl}</Badge>
        }
      </Group>
      </Group>
    </MantineHeader>
  );
};
