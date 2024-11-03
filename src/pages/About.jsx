import React from 'react'; 
 
const AboutUsPage = () => { 
  return ( 
    <div className="flex flex-col items-center justify-center m-16 min-h-screen bg-gray-100 p-4"> 
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6 space-y-6"> 
        <h1 className="text-3xl font-semibold text-center text-gray-800">About Us</h1> 
         
        <section> 
          <h2 className="text-2xl font-semibold text-gray-800">Welcome to Our Fellowship</h2> 
          <p className="text-gray-600 mt-2"> 
            We are a community of believers committed to spreading love, hope, and faith in Jesus Christ. Our doors are open to everyone, regardless of where you are on your faith journey. Together, we seek to grow closer to God and to one another. 
          </p> 
        </section> 
         
        <section> 
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2> 
          <p className="text-gray-600 mt-2"> 
            Our mission is to glorify God by making disciples of all nations. We strive to embody the teachings of Jesus by loving others, serving our community, and nurturing a supportive environment where everyone can experience God’s grace. 
          </p> 
        </section> 
         
        <section> 
          <h2 className="text-2xl font-semibold text-gray-800">Our Core Values</h2> 
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1"> 
            <li><span className="font-semibold">Faith:</span> Trusting God and following His Word.</li> 
            <li><span className="font-semibold">Love:</span> Embracing others as Jesus embraced us.</li> 
            <li><span className="font-semibold">Community:</span> Building strong, caring relationships within our fellowship.</li> 
            <li><span className="font-semibold">Service:</span> Using our talents and resources to serve others.</li> 
            <li><span className="font-semibold">Growth:</span> Continuously growing in our faith and helping others do the same.</li> 
          </ul> 
        </section> 
         
        <section> 
          <h2 className="text-2xl font-semibold text-gray-800">Our History</h2> 
          <p className="text-gray-600 mt-2"> 
            Established in [----], our fellowship began as a small gathering of individuals with a shared love for Jesus Christ. Over the years, we have grown into a vibrant community, dedicated to spreading the Gospel and serving those in need. Our journey has been blessed with countless testimonies of transformation, healing, and restored hope, all through God’s grace. 
          </p> 
        </section> 
         
        <section className="text-center mt-8 text-gray-700"> 
          <p className="italic">“Let us consider how we may spur one another on toward love and good deeds.”</p> 
          <p className="mt-1">- Hebrews 10:24</p> 
        </section> 
      </div> 
    </div> 
  ); 
}; 
 
export default AboutUsPage;
