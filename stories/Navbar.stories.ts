import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "../share/organisms/navbar";

const meta:Meta<typeof Navbar> = {
    title: 'Navbar',
    component : Navbar,
    tags : ['autodocs']
}

export default meta

type Story = StoryObj<typeof Navbar>

export const Login:Story = {
    args : {
        type : 'login'   
    }
}

export const LoggedIn:Story = {
    args : {
        type : 'loggedin'
    }
}