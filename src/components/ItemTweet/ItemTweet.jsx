import React from "react";

import {
  Article,
  Logo,
  Picture,
  AvatarWrapper,
  Line,
  Circle,
  Avatar,
  Text,
  Button,
} from "./ItemTweet.styled";

import logo from "../../images/logo.png";
import picture from "../../images/picture.png";

export default function ItemTweet({ user, onClick }) {
  return (
    <Article>
      <Logo src={logo} alt="logo" />
      <Picture src={picture} alt="background image" />
      <AvatarWrapper>
        <Line />
        <Circle>
          <Avatar src={user.avatar} alt={user.user} />
        </Circle>
      </AvatarWrapper>
      <Text style={{ marginTop: "62px" }}>{user.tweets} tweets</Text>
      <Text style={{ marginTop: "16px" }}>
        {Intl.NumberFormat("en-US").format(user.followers)} followers
      </Text>
      <Button onClick={() => onClick(user.id)} isFollow={user.isFollow}>
        {user.isFollow ? "Following" : "Follow"}
      </Button>
    </Article>
  );
}
