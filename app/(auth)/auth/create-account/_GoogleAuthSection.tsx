import Svg from "@/components/common/Svg"
import { Button } from "@/components/ui/button"
import { googleIcon } from "@/public/assets/icons"

function GoogleAuthSection() {
    return (
        <div className='mt-10'>
            <Button variant='outline' className='rounded-md gap-2'>
                <Svg SvgIcon={googleIcon} />Sign-up with Google
            </Button>
            <div className='w-full flex items-center gap-4 my-7'>
                <div className='h-px w-full bg-black-500'></div>
                OR
                <div className='h-px w-full bg-black-500'></div>
            </div>
        </div>
    )
}

export default GoogleAuthSection
