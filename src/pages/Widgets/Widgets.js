import {
  CartCard,
  ImageStatCard,
  MapCard,
  NewsCard,
  PostCard,
  ProfileCard,
  StatCard,
  WeatherCard,
  Wrapper
} from "../../components";
import React, { useState } from "react";

import Avatar from "@material-ui/core/Avatar";
import EmailIcon from "@material-ui/icons/Email";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PhoneIcon from "@material-ui/icons/Phone";
import { mockFeed } from "../../utils/mock";
import red from "@material-ui/core/colors/red";

const Widgets = () => {
  const [feed] = useState(mockFeed.slice(0, 3));
  const [stats] = useState([
    {
      title: "Comments",
      value: 24
    },
    {
      title: "Likes",
      value: 45
    },
    {
      title: "Shares",
      value: 984
    }
  ]);

  return (
    <Wrapper>
      <Grid container spacing={1}>
        {/*
          Stat cards
        */}
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Coupons"
            value={103}
            icon={<LocalOfferIcon />}
            color="#3f51b5"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Users"
            value={230}
            icon={<PhoneIcon />}
            color="#9c27b0"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Queries"
            value={323}
            icon={<NotificationsIcon />}
            color="#f44336"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Opens"
            value={870}
            icon={<EmailIcon />}
            color="#ffd740"
          />
        </Grid>

        {/*
          Filled Stat cards
        */}
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            type="fill"
            title="Campaigns"
            value={103}
            icon={<LocalOfferIcon />}
            color="#3f51b5"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            type="fill"
            title="Customers"
            value={230}
            icon={<PhoneIcon />}
            color="#9c27b0"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            type="fill"
            title="Queries"
            value={323}
            icon={<NotificationsIcon />}
            color="#f44336"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            type="fill"
            title="Opens"
            value={870}
            icon={<EmailIcon />}
            color="#ffd740"
          />
        </Grid>

        {/*
          News card
        */}
        <Grid item xs={12} sm={12} md={12}>
          <NewsCard subtitle="Last updated 24 mins ago" feed={feed} />
        </Grid>









      </Grid>
    </Wrapper>
  );
};

export default Widgets;
