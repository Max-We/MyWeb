import Image from 'next/image'
import AboutMeCard from '../components/about me/about-me-card'

export default function AboutMe() {
  return (
    <div className="mb-12 flex flex-col items-center sm:p-0 xl:mb-0">
      <span className="mb-7">
        <Image
          src="/profile-picture.png"
          alt="Picture of me"
          width={200}
          height={200}
          className="rounded-full border-solid"
          draggable="false"
        />
      </span>

      <div className="grid gap-5 md:grid-cols-2">
        <AboutMeCard
          title="š I'm Max!"
          content={[
            'Welcome to my personal website. I love building apps and working on innovative projects.',
          ]}
        />

        <AboutMeCard
          title="šāāļø About me"
          content={[
            `Iām writing about my projects, thoughts and learning on my MyBlog and
        MyPlan. If you want to follow along my current activities, checkout
        MyFeed.`,
          ]}
        />

        <AboutMeCard
          title="š± Technologies"
          content={[
            `I love developing apps using React.js, SwiftUI and other technologies.
        You can have a look at my projects on the MyProject page.`,
          ]}
        />

        <AboutMeCard
          title="š University"
          content={[
            `Currently, Iām studying Media informatics at University Regensburg and
        working as a student at Vector Informatik.`,
          ]}
        />

        <AboutMeCard
          title="šØ Training"
          content={[
            `I completed a vocational education as application developer at Omniga
        GmbH in 2021.`,
          ]}
        />

        <AboutMeCard
          title="š„ Business Inquieries"
          content={[
            `If you want to work with me, you can message me on LinkedIn or send me an
          email at maximilian.weichart@icloud.com`,
          ]}
        />
      </div>
    </div>
  )
}
