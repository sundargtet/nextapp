import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { Badge } from '@chakra-ui/react'
import { bookmarkQuotesCount } from '@/state/selectors'
import Icon from '@/share/atoms/icon'

export default function Bookamarks() {
    const router = useRouter()
    const count = useRecoilValue(bookmarkQuotesCount)
    const handleBookmarkList = () => {
        router.push(`/bookmarks`)
    }
    return (
        <div>
            {
                count ?
                    <>
                        <Icon type='bookmarked' handleClick={handleBookmarkList} />
                        {/* <Badge colorScheme={'green'}>{count}</Badge> */}
                    </> :
                    <Icon type='bookmark' />
            }
        </div>
    )
}