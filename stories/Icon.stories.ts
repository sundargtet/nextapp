import type { Meta, StoryObj } from "@storybook/react";
import Icon from "../share/atoms/icon";

const meta:Meta<typeof Icon> = {
    title : 'Icon',
    component: Icon,
    tags:['autodocs'],
    argTypes : {
        type:{
            control : 'select',
            options:['user','bookmark','bookmarked', 'open','logout','about','profile','menu','error']
        }
    }
}
export default meta;

type Story = StoryObj<typeof Icon>

export const Primary : Story = {
    args : {
        type : 'bookmark'
    }
}