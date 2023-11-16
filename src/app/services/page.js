import React from 'react';
import styles from './page.module.scss';
import Productcard from '../../../components/Productcard';
import img4 from '../../../public/smallcard1.jpg';
import img2 from '../../../public/smallcard2.jpg';
import img3 from '../../../public/smallcard3.jpg';
import img1 from '../../../public/smallcard4.jpg';
import Image from 'next/image';
import ps5img from '../../../public/ps5wallpaper.png';
import xboximg from '../../../public/xboxwallpaper.jpg';
import Banner from '../../../components/Banner';
import Link from 'next/link';


const Services = () => {
  const data = [{title: 'Champions League',price:999,img: img1,},{title: 'Franca',price:999,img: img2, },{title: 'Italia',price:999,img: img3, },{title: 'Juventus',price:999,img: img4, },];
  return (<>
      <div className={styles.supermain}>
    <div className={styles.main1}>
           <Image  className={styles.image1}  width={760} height={550}  src={ps5img} alt="ps5_img"/>
           <Link href='https://www.flipkart.com/sony-ps5-standard-dualsense-bundle-cfi-1208a01r-825gb-ssd-gb/p/itm73b71109455e7?pid=GMCGS45PYCYPQMDS&lid=LSTGMCGS45PYCYPQMDSKQQYE6&marketplace=FLIPKART&q=ps5&store=4rr%2Fx1m&srno=s_1_2&otracker=search&otracker1=search&fm=organic&iid=a248f9d8-9cd0-48c6-8f58-8853bed512da.GMCGS45PYCYPQMDS.SEARCH&ppt=hp&ppn=homepage&ssid=hpwyvvldfk0000001699358828004&qH=458a2eb0daa8654a' className={styles.btn1}>Click </Link>
           <Image  className={styles.image2}  width={760} height={550}  src={xboximg} alt="xbox_img"/>
           <Link href='https://www.flipkart.com/microsoft-xbox-series-x-1024-gb/p/itm5f4b119752568?pid=GMCFVPFCFDFGJHGG&lid=LSTGMCFVPFCFDFGJHGGFHTWV3&marketplace=FLIPKART&q=xbox&store=4rr&srno=s_1_2&otracker=search&otracker1=search&fm=organic&iid=665b9669-4ea0-484f-bf08-4ca90e73643a.GMCFVPFCFDFGJHGG.SEARCH&ppt=pp&ppn=pp&ssid=urco7dhrcw0000001699358872120&qH=3a3417f5f20a03a9' className={styles.btn2}> me</Link>
    </div>

<Banner text={"Best Gamepads"}/>

    <div className={styles.main2}>
     {data.map((item, index) => (<Productcard key={index} {...item} />))}
    </div>
    

    <div className={styles.main3}></div>


    <Banner text={"Gaming Headphones"}/>
    
    <div className={styles.main4}>
      <h1>Rs 1999</h1>
      <Link href='https://www.amazon.in/Beats-Solo3-Wireless-Ear-Headphones/dp/B07VYG649S'>BUY NOW</Link>
    </div>
    
    <Banner text={" VR Smart Glasses "}/>
    <div className={styles.main5}>
      <h1>BLACKPOOL VR Smart Glasses with Built-in Adjustable Headphones and Bluetooth Remote Controller- Virtual Reality VR Headset with 110 Degree FOV</h1>
      <Link href='https://www.amazon.in/BLACKPOOL-VR-Adjustable-Headphones-Controller/dp/B0CMDCLJQ4/ref=sr_1_2_sspa?keywords=3D+VR+Box&nsdOptOutParam=true&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'>BUY NOW</Link>
    </div>

      </div>
    </>)
}

export default Services