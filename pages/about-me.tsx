import Image from 'next/image'
import Card from '../components/about me/card'

export default function AboutMe() {
  return (
    <div className="container mx-auto grid place-items-center px-3 sm:p-0">
      <span className="mb-7">
        <Image
          src="/profile-picture.png"
          alt="Picture of me"
          width={200}
          height={200}
          className="rounded-full"
        />
      </span>

      <Card
        title="👋 I'm Max!"
        content={['I love building apps and working on innovative projects.']}
      />

      <Card
        title="🙋‍♂️ About me"
        content={[
          `I’m writing about my projects, thoughts and learning on my MyBlog and
        MyPlan. If you want to follow along my current activities, checkout
        MyFeed.`,
        ]}
      />

      <Card
        title="📄 Experiences"
        content={[
          `I completed a vocational education as application developer at Omniga
        GmbH in 2021.`,
          ` Right now I’m studying Mediainformatics at University Regensburg and
        working as a student at Vector Informatik.`,
          `I love developing apps using React.js, SwiftUI and other technologies.
        You can have a look at my projects on the MyProject page.`,
        ]}
      />

      <Card
        title="Business Inquieries"
        content={[
          `If you want to work with me, you can message me on LinkedIn or send me an
          email at maximilian.weichart@icloud.com`,
        ]}
      />
    </div>
  )
}
