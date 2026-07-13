"use client"

import { ROUTES } from "@/constants/routes";
import { Container, Navbar } from "react-bootstrap";
import Clock from "./clock";

export default function TopMenu() {
  return (
    <Navbar className="bg-blue-100 text-blue-900 shadow-lg" >
      <Container className="flex justify-between m-10">
        <Navbar.Brand href={ROUTES.ROOT}>My App</Navbar.Brand>
        <Clock />
      </Container>
    </Navbar>
  )
}
