import Container from '@/app/_layouts/Container';
import {Button} from "@nextui-org/react"
import Layout from "@/app/_layouts/LayoutDashboard"
const page=()=>{
    
    return(
        <Layout titre="Saisie">
            <span className="text-2xl text-white">Je suis la sdsdkslkd</span>
            {
                <div className="h-[800px]">
                    <Button color="primary">Test</Button>
                </div>
            }
        </Layout>
    )
}
export default page