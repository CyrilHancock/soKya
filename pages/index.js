import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title='So Kya' description='Plan to Victory' />
      <Header name='So Kya'/>
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
           Plan to Victory
        </h1>
        <ul className="w-full">
          <li className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0">
            <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
              <h2 className="text-2xl md:text-3xl">Preface:</h2>
              <p className="mt-3 text-lg opacity-60">
                <li>
                  Each exercise should be performed based on one&apos;s strength
                  and capabilities.
                </li>
                <li>
                  If the advanced variation of an exercise is not possible, try
                  easier variations.
                </li>
                <li>
                  Prioritize mobility drills before exercise, and focus on
                  maintaining proper form.
                </li>
                <li>
                  Mobility drills will enhance flexibility and agility,
                  preparing you for a successful workout.
                </li>
              </p>
            </a>
          </li>
          <li className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0">
            <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
              <h2 className="text-2xl md:text-3xl">Mobility</h2>
              <p className="mt-3 text-lg opacity-60">
                Warming up is essential, especially for calisthenics training.
                Spend a few minutes to get your body ready for the workout.
                Choose a cardiovascular activity like running or jogging for 5-8
                minutes to elevate your heart rate and warm up muscles, tendons,
                and ligaments.
              </p>
            </a>
          </li>
          <li className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0">
            <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
              <h2 className="text-2xl md:text-3xl">Upper Body Mobility</h2>
              <p className="mt-3 text-lg opacity-60">
                <ul>
                  <li>Scapula push-up</li>
                  <li>Scapula pull-up</li>
                  <li>Scapula foam rolling</li>
                  <li>Armpit foam rolling</li>
                  <li>Rotator cuff stretch</li>
                  <li>Chest and shoulder stretch</li>
                  <li>Shoulder dislocates</li>
                </ul>
              </p>
            </a>
          </li>
          <li className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0">
            <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
              <h2 className="text-2xl md:text-3xl">Core Mobility</h2>
              <p className="mt-3 text-lg opacity-60">
                <ul>
                  <li>Spine foam rolling</li>
                  <li>Side leans</li>
                </ul>
              </p>
            </a>
          </li>
          <li className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0">
            <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
              <h2 className="text-2xl md:text-3xl">Lower Body Mobility</h2>
              <p className="mt-3 text-lg opacity-60">
                <ul>
                  <li>IT band foam rolling</li>
                  <li>Adductor foam rolling</li>
                  <li>Piriformis foam rolling</li>
                  <li>Rollovers into straddle sit</li>
                  <li>Knee circles</li>
                  <li>Mountain climbers</li>
                  <li>Frog hops</li>
                  <li>Hip flexor stretch</li>
                  <li>Deep squat position (beneficial for everyone)</li>
                </ul>
              </p>
            </a>
          </li>
          <li className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0">
            <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
              <h2 className="text-2xl md:text-3xl">Flexibility</h2>
              <p className="mt-3 text-lg opacity-60">
                After your workout, spend a few minutes on these stretches,
                holding each for 10-15 seconds
              </p>
            </a>
          </li>
          <li className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0">
            <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
              <h2 className="text-2xl md:text-3xl">Upper Body Stretches</h2>
              <p className="mt-3 text-lg opacity-60">
                <ul>
                  <li>Chest and shoulder stretch</li>
                  <li>Upper back stretch</li>
                  <li>Chest stretch</li>
                  <li>Forearm/wrist stretch 1</li>
                  <li>Forearm/wrist stretch 2</li>
                </ul>
              </p>
            </a>
          </li>
          <li className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0">
            <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
              <h2 className="text-2xl md:text-3xl">Core Stretches</h2>
              <p className="mt-3 text-lg opacity-60">
                <ul>
                  <li>Standing side stretch</li>
                  <li>Cobra stretch</li>
                  <li>Cat stretch</li>
                </ul>
              </p>
            </a>
          </li>
          <li className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0">
            <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
              <h2 className="text-2xl md:text-3xl">Lower Body Stretches</h2>
              <p className="mt-3 text-lg opacity-60">
                <ul>
                  <li>Quad stretch</li>
                  <li>Hamstring stretch</li>
                  <li>Straddle stretch</li>
                  <li>Groin stretch</li>
                  <li>Hip flexor stretch</li>
                  <li>Glute stretch</li>
                  <li>Calf stretch</li>
                </ul>
              </p>
            </a>
          </li>
          <li className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0">
            <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
              <h2 className="text-2xl md:text-3xl">
                Exercise: (Monday, Wednesday, Friday)
              </h2>
              <p className="mt-3 text-lg opacity-60">
                The Fundamental Five exercises are the cornerstone of
                calisthenics training. Perform each exercise with proper form
                and aim for the following repetitions:
              <ul>
                <li>Push-ups:</li>
                <li className='text-sm'>Minimum of 20 perfect repetitions (2-3 sets)</li>
                <li>
                  Pull-ups:
                  </li>
                  <li className='text-sm'>
                   Minimum of 10 perfect repetitions (2-3 sets); if no
                  equipment, try bent over barbell row with a towel
                </li>
                <li>
                  Triceps dips:
                  </li>
                  <li className='text-sm'>
                   Minimum of 10 perfect repetitions (2-3 sets); if
                  no equipment, try back dips
                </li>
                <li>
                  Hanging knee raises:
                  </li>
                  <li className='text-sm'>
                   Minimum of 10 perfect repetitions (2-3
                  sets); if challenging, try reverse crunches
                </li>
                <li>Squats:
                </li>
                  <li className='text-sm'>
                   Minimum of 25 perfect repetitions (2-3 sets)</li>
                   
              </ul>
              </p>

            </a>
          </li>
        </ul>
      </main>
      <Footer copyrightText='The only limit to our realization of tomorrow will be our doubts of today' />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
