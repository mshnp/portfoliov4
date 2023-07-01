import Banner from '@/components/Banner';
import Homepage from '@/components/homePage';

export const revalidate = 60;

const Home = () => {

    return (
      <div className='max-w-5xl mx-auto px-4 sm:px-8'>
        <Banner/>
        <Homepage/>
      </div>
    )
}

export default Home