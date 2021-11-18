import { Button, Heading } from "theme-ui";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Flag from "../components/flag";
import Nav from "../components/nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <Heading as="h1" variant="title" color="red">
        Hi
      </Heading>
      <Button variant="lg">Hi</Button>
    </div>
  );
}
