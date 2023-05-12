import Layout from '../components/Layout'
import Anchor from '../components/anchor'
import ArticleCard from '../components/article-card'
import Divider from '../components/divider'
import MemberCard from '../components/member-card'
import ServiceCard from '../components/service-card'
import Post from '../interfaces/post'
import { getAllPosts } from '../lib/api'
import url from '../lib/url'

type Props = {
  allPosts: Post[]
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'slug', 'image', 'excerpt'])
  return {
    props: { allPosts }
  }
}

const Index = ({ allPosts }: Props) => (
  <Layout title="CoderDojo | Kisarazu">
    <Hero />
    <Services allPosts={allPosts} />
    <Featured />
    <Team />
    <Finisher />
    <Contact />
  </Layout>
)

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
        backgroundImage: `url(${url('/images/hero-image.jpg')})`
      }}
    >
      <span
        id="blackOverlay"
        className="w-full h-full absolute opacity-60 bg-black"
      ></span>
    </div>
    <div className="container relative mx-auto">
      <div className="items-center flex flex-wrap">
        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <h1 className="text-white font-semibold md:text-5xl text-4xl">
            CoderDojo 木更津
          </h1>
          <div className="mt-6 text-xl text-gray-300">
            <div className="py-5 md:text-4xl text-xl">
              <p>毎月第一日曜日午前10時～12時</p>
              <p className="pb-2">
                <a
                  className="font-bold hover:underline"
                  href="http://k-mirailabo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  きさらづみらいラボ
                </a>
                （木更津駅前）にて開催
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
      style={{ height: '70px' }}
    >
      <Divider color="gray-300" />
    </div>
  </div>
)

const Services = ({ allPosts }: Props) => {
  const post = allPosts[0]
  return (
    <section className="pb-20 bg-gray-300 -mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <ServiceCard title="CoderDojoとは" icon="/images/coderdojo-logo.png">
            CoderDojoは7〜17歳の子どもを対象にしたプログラミング道場です。
            2011年にアイルランドで始まり、
            世界では100カ国・2,000の道場、日本には213以上の道場があります（2023年5月現在）
          </ServiceCard>

          <ServiceCard
            title="CoderDojo木更津とは"
            icon="/images/icon-128x128.png"
          >
            CoderDojo木更津は千葉県木更津市を中心に活動するCoderDojoです。
            参加は無料で、対象は小・中学生となります。
            慣れるまで小学生は保護者同伴でご参加ください。
          </ServiceCard>
          <ServiceCard title="参加にあたり" icon="/images/Scratch_Cat_3.0.svg">
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
                CoderDojo木更津では子どもの好奇心に応じて、さまざまなプログラミング言語やツールを主体的に学びます。道場として次のような内容をサポートできます。
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
            <ArticleCard post={post} />
          </div>
        </div>
      </div>
    </section>
  )
}

const Featured = () => (
  <section className="relative py-20">
    <div
      className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style={{ height: '80px' }}
    >
      <Divider color="white" />
    </div>

    <div className="container mx-auto px-4">
      <div className="items-center flex flex-wrap">
        <iframe
          className="w-full md:w-6/12 ml-auto mr-auto px-4"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3252.9152281821966!2d139.9234740146051!3d35.38255845390273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018734d428c41fb%3A0x63c21f39ebea920e!2z44G_44KJ44GE44Op44Oc!5e0!3m2!1sja!2sjp!4v1596336446455!5m2!1sja!2sjp"
          width="600"
          height="450"
          allowFullScreen={true}
          aria-hidden={false}
          tabIndex={0}
        ></iframe>

        <div className="w-full md:w-5/12 ml-auto mr-auto px-4 md:mt-0 mt-8">
          <div className="md:pr-12">
            <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
              <i className="fas fa-map-location text-3xl"></i>
            </div>
            <h3 className="text-3xl font-semibold">
              開催場所
              <a
                className="ml-3 text-blue-500 hover:underline"
                href="http://k-mirailabo.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                きさらづみらいラボ
              </a>
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              きさらづみらいラボ（木更津市市民活動支援センター）は、様々な分野の市民活動団体の拠点として、市民活動に関する情報収集・情報発信の場として2015年10月にオープンしました。センターでは常駐のスタッフが市民活動に関わる相談や、団体同士のネットワークづくり、人材育成など市内の活動がより活発になるためのサポートを行います。
              また、センターでは情報発信スペース、作業スペース、印刷室や会議室などを備えています。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Team = () => (
  <section className="pt-20 pb-48">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center text-center mb-24">
        <div className="w-full lg:w-6/12 px-4">
          <h2 className="text-4xl font-semibold">参加を支援する人たち</h2>
          <div className="text-lg leading-relaxed m-4 text-gray-600">
            <p>
              CoderDojoはプログラミング教室ではありません。ニンジャと呼ばれる参加者は、自分の興味に応じて、自分のペースで学びます。ニンジャの学びをサポートするのがチャンピオン（Dojoの運営担当）・メンター（技術的な案内人）の役割です。
            </p>
            <p className="mt-2">
              CoderDojo木更津のチャンピオン、メンターはコンピュータの専門家揃いで、様々な種類のプログラミングをサポートします。
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
    </div>
  </section>
)

const Finisher = () => (
  <section className="pb-20 relative block bg-gray-900">
    <div
      className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style={{ height: '80px' }}
    >
      <Divider color="gray-900" />
    </div>

    <div className="container mx-auto px-4 lg:pt-24 lg:pb-64 pt-12 pb-24">
      <div className="flex flex-wrap text-center justify-center">
        <div className="w-full lg:w-6/12 px-4">
          <h2 className="text-4xl font-semibold text-white">お問い合わせ</h2>
        </div>
      </div>
    </div>
  </section>
)

const Contact = () => (
  <section className="relative block py-24 lg:pt-0 bg-gray-900">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
        <div className="w-full lg:w-6/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
            <div className="flex-auto p-5 lg:p-10">
              <h4 className="text-2xl font-semibold">連絡・質問</h4>
              <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                参加のご連絡をお待ちしております。また、CoderDojo木更津に関する質問もお気軽にどうぞ。
                （ここはGoogle Formに変更、プライバシーポリシーも必要か）
              </p>
              <div className="relative w-full mb-3 mt-8">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="full-name"
                >
                  氏名
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="苗字 名前"
                  style={{ transition: 'all .15s ease' }}
                />
              </div>

              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  メールアドレス
                </label>
                <input
                  type="email"
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Email"
                  style={{ transition: 'all .15s ease' }}
                />
              </div>

              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="message"
                >
                  内容
                </label>
                <textarea
                  rows={4}
                  cols={80}
                  className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="お問い合わせ内容 ..."
                />
              </div>
              <div className="text-center mt-6">
                <button
                  className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  style={{ transition: 'all .15s ease' }}
                >
                  送信
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
