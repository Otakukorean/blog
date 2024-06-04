import FeaturedPosts from "@/components/FeaturedPosts";
import PinnedPosts from "@/components/PinnedPosts";
export default async function Home() {

  return (

     <div className="space-y-12">
    <PinnedPosts />
    <FeaturedPosts />
    </div>
 


  )
}
