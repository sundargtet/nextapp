import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { Avatar, AvatarBadge, Stack } from '@chakra-ui/react'
import { bookmarkQuotesCount } from '@/state/selectors'
import Icon from '@/share/atoms/icon'
import { icons } from '@/utils/icons'

export default function Bookamarks() {
    const router = useRouter()
    const count = useRecoilValue(bookmarkQuotesCount)
    const handleBookmarkList = () => {
        router.push(`/bookmarks`)
    }
    return (
        <>
            {
                count ?
                    <>
                        <Avatar
                            icon={<icons.bookmarked />}
                            cursor='pointer'
                            size='xs'
                            bg={'#000000'}
                            onClick={handleBookmarkList}
                        >
                            <AvatarBadge boxSize='1.25em' bg='green.500'>
                                {count}
                            </AvatarBadge>
                        </Avatar>
                    </> :
                    <Avatar
                        icon={<icons.bookmark />}
                        size='xs'
                        bg={'#000000'}
                    />
            }
        </>
    )
}