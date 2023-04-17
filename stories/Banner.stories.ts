import type { Meta, StoryObj } from "@storybook/react";
import Banner from "../share/organisms/banner";

const meta:Meta<typeof Banner>= {
    title:"Banner",
    component:Banner,
    tags:['autodocs']
}

export default meta;

type Story = StoryObj<typeof Banner>

export const Primary:Story = {
    args : {
        quote:'I can, I will, End of Story',
        author:'King'
    }
}