import { IconType } from 'react-icons'
import { FaRegBookmark } from 'react-icons/fa'
import { FaBookmark } from 'react-icons/fa'
import { BiNavigation } from 'react-icons/bi'
import { FaUserCircle } from 'react-icons/fa'
import { IoLogOutOutline } from 'react-icons/io5'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { AiOutlineProfile } from 'react-icons/ai'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { MdErrorOutline } from 'react-icons/md'
import { BsCircle } from 'react-icons/bs'
import { TbClover } from 'react-icons/tb'
import { MdOutlineFavorite } from 'react-icons/md'
import { MdKeyboardCommandKey } from 'react-icons/md'
import { CgArrowsH } from 'react-icons/cg'

export const icons: { [propKey: string]: IconType } = {
    bookmark: FaRegBookmark,
    bookmarked: FaBookmark,
    open: BiNavigation,
    user: FaUserCircle,
    logout: IoLogOutOutline,
    about: BiMessageSquareDetail,
    profile: AiOutlineProfile,
    menu: HiOutlineMenuAlt2,
    error: MdErrorOutline,
    circle: BsCircle,
    clover: TbClover,
    fav: MdOutlineFavorite,
    command: MdKeyboardCommandKey,
    arrows: CgArrowsH
}