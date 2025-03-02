import Image from 'next/image'
import Anchor from '../components/anchor'
import Divider from '../components/divider'
import Layout from '../components/layout'
import MemberCard from '../components/member-card'
import PostCard from '../components/post-card'
import ServiceCard from '../components/service-card'
import Post from '../interfaces/post'
import { getAllPosts } from '../lib/api'
import url from '../lib/url'
import { useEffect, useState } from 'react'

type ScratchCard = {
  id: string
  title: string
  description: string
}

type Props = {
  allPosts: Post[],
  scratchCards: ScratchCard[]
}

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'slug', 'image', 'excerpt'])
  const scratchCards = [
    {
      id: "896574978",
      title: "どんぐりスロット",
      description: "ドングリを使ったスロットゲームです。同じ種類のドングリを組み合わせることができるか!? スタートをクリックしてスロットを回しましょう！スペースキーで止められます。"
    },
    {
      id: "860791993",
      title: "デジタル戦隊テレんじゃー",
      description: "Scratchにオリジナルキャタラクターを読み込んでアニメーションをつける教材です。左右の矢印キーで移動、上矢印キーでジャンプします。スペースキーで必殺のデジタル・フラッシュが炸裂します!"
    },
    {
      id: "918967238",
      title: "COSOMシューティング",
      description: "矢印キーで操作できます。右側にいる人を動かして宇宙人をやっつけます。攻撃方法は、スペースキーで弱攻撃(エネルギー１５以上)Aキーで強攻撃(エネルギー２５以上)Sキーで遠距離攻撃(エネルギー２５以上)です。3つの攻撃をうまく使って雷攻撃をしてくる悪い宇宙人を倒しましょう。"
    },
    {
      id: "960666319",
      title: "風船ゲーム",
      description: "風船をウチワであおいで器に入れましょう!障害物で風船が割れないようにご用心!独特の浮遊感をお楽しみ下さい。CoderDojoでリミックスして楽しめるよう、極力シンプルなステージクリア型のゲームにしました。"
    },
    {
      id: "766087772",
      title: "ゆきんこゲーム",
      description: "めいろ、ジャンプゲーム、アクションゲーム、３つの種類のゲームをゆきんこで楽しみましょう!"
    },
    {
      id: "799849878",
      title: "鬼はそとゲーム",
      description: "豆を投げて鬼退治!鬼は棍棒を投げてくるので、避けながら豆を投げましょう。"
    },
    {
      id: "1013586458",
      title: "風船バレーボール",
      description: "風船をうちわであおいで、バレーボールをしましょう。自分の陣地で風船が割れたら負けです!CoderDojoでリミックスして楽しめるよう、極力シンプルなステージクリア型のゲームにしました。"
    },
    {
      id: "556638656",
      title: "アゲハの成長",
      description: "Scratchでなみアゲハが幼虫から成虫になるまでを学びましょう!"
    }
  ];

  return {
    props: { allPosts, scratchCards }
  }
}

const Index = ({ allPosts, scratchCards }: Props) => {

  return (
    <Layout title="CoderDojo | Kisarazu+Sodegaura">
      <Hero />
      <Services allPosts={allPosts} />
      <Featured />
      <Team scratchCards={scratchCards} />
      <Finisher />
      <Contact />
    </Layout>
  );
};

export default Index

/// Page Sections
const Hero = () => (
  <div
    className="relative pt-16 pb-32 flex content-center items-center justify-center"
    style={{
      minHeight: '75vh'
    }}
  >
    <div
      className="absolute top-0 w-full h-full bg-center bg-cover"
      style={{
        backgroundImage: `url(${url(
          '/images/new-hero-coderdojo-kisarazu.jpg'
        )})`
      }}
    >
      <span
        id="blackOverlay"
        className="w-full h-full absolute opacity-50 bg-black"
      ></span>
    </div>
    <div className="container relative mx-auto">
      <div className="items-center flex flex-wrap">
        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center text-shadow">
          <h1 className="text-white font-semibold md:text-5xl text-4xl">
            CoderDojo 木更津・袖ヶ浦
          </h1>
          <div className="mt-6 text-xl text-gray-300">
            <div className="py-5 md:text-3xl text-xl">
              <p>毎月第一日曜日</p>
              <p>
                10時～12時
                <a
                  className="font-bold ml-2"
                  href="https://k-mirailabo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  きさらづみらいラボ
                </a>
              </p>
              <p>
                13時～15時
                <a
                  className="font-bold ml-2"
                  href="https://gaulab.jp/Yokota"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ガウラボYokota
                </a>
              </p>
              <p className="pb-2">にて開催！</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="top-auto bottom-0 w-full absolute pointer-events-none"
      style={{ height: '70px' }}
    >
      <Divider color="gray-300" />
    </div>
  </div>
)

const Services = ({ allPosts }: { allPosts: Post[] }) => {
  const post = allPosts[0]
  return (
    <section className="pb-20 bg-gray-300 -mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <ServiceCard title="CoderDojoとは" icon="/images/coderdojo-logo.png">
            CoderDojoは7〜17歳の子どもを対象にしたプログラミング道場です。
            2011年にアイルランドで始まり、
            世界では100カ国・2,000の道場、日本には213以上の道場があります（2023年5月現在）
          </ServiceCard>

          <ServiceCard
            title="CoderDojo木更津・袖ヶ浦とは"
            icon="/images/coderdojo-kisarazu-sodegaura.svg"
            maxHeight="140px"
          >
            CoderDojo木更津・袖ヶ浦は千葉県木更津市を中心に活動するCoderDojoです。
            参加は無料で、対象は小・中学生となります。
            慣れるまで小学生は保護者同伴でご参加ください。
          </ServiceCard>
          <ServiceCard
            title="参加にあたり"
            icon="/images/Scratch_Cat_3.0.svg"
            maxHeight="130px"
          >
            はじめのうちは、
            <Anchor href="https://scratch.mit.edu">Scratch</Anchor>
            を扱います。その後は、希望に応じて新しいことに取り組んでいきます。
            <li>対象: 小学生～中学生</li>
            <li>持ち物: ノートPCとマウスをご持参ください。</li>
          </ServiceCard>
        </div>

        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
              <i className="fas fa-user-friends text-3xl"></i>
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
              子どもの好奇心に応じて
            </h3>
            <div className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
              <p>
                CoderDojo木更津・袖ヶ浦では子どもの好奇心に応じて、さまざまなプログラミング言語やツールを主体的に学びます。道場として次のような内容をサポートできます。
              </p>
              <li>Scratch</li>
              <li>ドローンプログラミング</li>
              <li>LEGO Mindstorms EV3</li>
              <li>Webサイト構築</li>
              <li>Python</li>
              <li>JavaScript/TypeScript</li>
              <li>Unity</li>
            </div>
          </div>

          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <PostCard post={post} />
          </div>
        </div>
      </div>
    </section>
  )
}

const LocationDescription = ({
  href,
  name,
  description
}: {
  href: string
  name: string
  description: string
}) => (
  <div className="w-full xl:w-6/12 lg:w-4/12 ml-auto mr-auto px-4 lg:mt-0 mt-8">
    <div className="md:pr-12">
      <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
        <i className="fas fa-map-location text-3xl"></i>
      </div>
      <h3 className="text-3xl font-semibold">
        開催場所
        <a
          className="ml-3 text-blue-500 hover:underline"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
      </h3>
      <p className="mt-4 text-lg leading-relaxed text-gray-600">
        {description}
      </p>
    </div>
  </div>
)

const ScratchThumbnailCard = ({
  id,
  title,
  description
}: {
  id: string
  title: string
  description: string
}) => (
  <div className="flex-none w-64 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden mx-2">
    <a
      href={`https://scratch.mit.edu/projects/${id}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={`https://uploads.scratch.mit.edu/get_image/project/${id}_216x163.png`}
        alt="サンプル画像"
        className="w-full object-cover"
      />
    </a>
    <div className="p-4">
      <a
        className="text-blue-500 hover:underline"
        href={`https://scratch.mit.edu/projects/${id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="text-lg font-semibold text-center">{title}</h2>
      </a>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  </div>
)

const ScratchCard = ({
  id,
  title,
  description
}: {
  id: string
  title: string
  description: string
}) => (
  <div className="w-full xl:w-1/2 2xl:w-1/3 lg:mb-0 my-12 mx-auto">
    <div className="max-w-[485px] aspect-[7/6] w-full mx-auto">
      <iframe
        src={`https://scratch.mit.edu/projects/${id}/embed`}
        style={{ backgroundColor: 'transparent' }}
        allowFullScreen
        className="mx-auto border-0 w-full h-full"
      ></iframe>
    </div>

    <a
      className="text-blue-500 hover:underline"
      href={`https://scratch.mit.edu/projects/${id}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className="text-2xl my-2 font-semibold text-center">{title}</h2>
    </a>
    <div className="max-w-[485px] mx-auto px-4 mt-4 text-lg">{description}</div>
  </div>
)

const Featured = () => (
  <section className="relative py-20">
    <div
      className="bottom-auto top-0 w-full absolute pointer-events-none -mt-20"
      style={{ height: '80px' }}
    >
      <Divider color="white" />
    </div>

    <div className="container mx-auto px-4">
      <div className="items-center flex flex-wrap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6505.829525258489!2d139.922754!3d35.38257!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018734d428c41fb%3A0x63c21f39ebea920e!2z5pyo5pu05rSl5biC5biC5rCR5rS75YuV5pSv5o-044K744Oz44K_44O8IOOAkOOBjeOBleOCieOBpeOBv-OCieOBhOODqeODnOOAkQ!5e0!3m2!1sja!2sjp!4v1712492464555!5m2!1sja!2sjp"
          width="600"
          height="450"
          className="border-0"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <LocationDescription
          href="https://k-mirailabo.com"
          name="きさらづみらいラボ"
          description="きさらづみらいラボ（木更津市市民活動支援センター）は、様々な分野の市民活動団体の拠点として、市民活動に関する情報収集・情報発信の場として2015年10月にオープンしました。センターでは常駐のスタッフが市民活動に関わる相談や、団体同士のネットワークづくり、人材育成など市内の活動がより活発になるためのサポートを行います。
              また、センターでは情報発信スペース、作業スペース、印刷室や会議室などを備えています。
              JR内房線・久留里線　木更津駅から徒歩5分(350m)"
        />
        
      </div>
    </div>

    <div className="container mx-auto px-4 mt-24">
      <div className="items-center flex flex-wrap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1626.401151411431!2d140.01995!3d35.385359!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDIzJzA1LjEiTiAxNDDCsDAxJzEzLjciRQ!5e0!3m2!1sja!2sjp!4v1712492178253!5m2!1sja!2sjp"
          width="600"
          height="450"
          className="border-0"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <LocationDescription
          href="https://gaulab.jp/Yokota"
          name="ガウラボYokota"
          description="ガウラボYokotaは袖ケ浦のコワーキングスペースGAULABの2つ目の拠点として誕生しました。地方から何かを始めたい、最初の一歩を踏み出してみたいと思う人たちが集まって何かを生み出すLaboratory(実験室）のような場所それがGAULABです。
          JR久留里線　横田駅から徒歩2分(150m)　/　馬来田線　横田（バス）駅から徒歩3分(230m)"
        />
      </div>
    </div>
  </section>
)


const Team = ({ scratchCards }: { scratchCards: ScratchCard[] }) => {
  const [scratchCardItems, setScratchCardItems] = useState<ScratchCard[]>([])
  const [scratchThumbnailCardItems, setScratchThumbnailCardItems] = useState<ScratchCard[]>([])

  useEffect(() => {
    const scratchCardsData = shuffleArray(scratchCards)
    const scratchCardItems = scratchCardsData.slice(0, 3);
    const scratchThumbnailCardItems = scratchCardsData.slice(3);
    setScratchCardItems(scratchCardItems)
    setScratchThumbnailCardItems(scratchThumbnailCardItems)
  }, [])

  return (
    <section className="pt-20 pb-20">
      <div className="container mx-auto lg:px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-10/12 px-4">
            <h2 className="text-4xl font-semibold">参加を支援する人たち</h2>
            <div className="text-lg leading-relaxed m-4 text-gray-600">
              <p>
                CoderDojoはプログラミング教室ではありません。ニンジャと呼ばれる参加者は、自分の興味に応じて、自分のペースで学びます。ニンジャの学びをサポートするのがチャンピオン（Dojoの運営担当）・メンター（技術的な案内人）の役割です。
              </p>
              <p className="mt-2">
                CoderDojo木更津・袖ヶ浦のチャンピオン、メンターはコンピュータの専門家揃いで、様々な種類のプログラミングをサポートします。
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <MemberCard
            name="仲村"
            role="チャンピオン"
            icon="/assets/blog/authors/nakamura.jpg"
            profession="Web"
          />
          <MemberCard
            name="島野"
            role="チャンピオン代行"
            icon="/assets/blog/authors/shimano.jpg"
            profession="AI, ドローン"
          />
          <MemberCard
            name="飯田"
            role="メンター"
            icon="/assets/blog/authors/iida.jpg"
            profession="Python, micro:bit, 3Dプリンタ"
          />
          <MemberCard
            name="土屋"
            role="メンター"
            icon="/assets/blog/authors/tsuchiya.jpg"
            profession="Scratch"
          />
          <MemberCard
            name="小宮"
            role="メンター"
            icon="/assets/blog/authors/komiya.png"
            profession="Web, Unity"
          />
        </div>

        <div className="flex flex-wrap justify-center text-center mb-6 mt-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">
              ニンジャ・チャンピオン・メンターの作品
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap mt-5 mx-auto">
          {scratchCardItems.map((card) => (
            <ScratchCard
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <div className="overflow-x-auto py-4">
          <div className="flex space-x-4 px-4">
            {scratchThumbnailCardItems.map((card) => (
              <ScratchThumbnailCard
                key={card.id}
                id={card.id}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Finisher = () => (
  <section className="pb-20 relative block bg-gray-800">
    <div
      className="bottom-auto top-0 w-full absolute pointer-events-none -mt-20"
      style={{ height: '80px' }}
    >
      <Divider color="gray-800" />
    </div>

    <div className="container mx-auto px-4 lg:pt-24 lg:pb-64 pt-12 pb-24">
      <div className="flex flex-wrap text-center justify-center">
        <div className="w-full lg:w-6/12 px-4">
          <h2 className="text-4xl font-semibold text-white">
            お気軽にご参加を
          </h2>
          <Image
            alt="line"
            src={url('/images/line-official-qr.jpg')}
            width="260"
            height="260"
            className="mx-auto mt-6"
          />
          <div className="text-2xl font-semibold text-white mt-6">
            <p>LINE公式アカウントのQRコードです。</p>
            <p>お気軽に友だち追加してください。</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Contact = () => (
  <section className="relative block py-24 lg:pt-0 bg-gray-800">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
        <div className="w-full lg:w-6/12">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
            <div className="flex-auto lg:p-10">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScpLDZyhWEljigl-YIOAUssX6pdJxmnGxn5ctu6ObgF4z3Eng/viewform?embedded=true"
                className="text-center mx-auto"
                width="100%"
                height="890"
              >
                読み込んでいます…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
