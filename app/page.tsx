import styles from './styles.module.css';

import Header from './components/Header';
import Post from './components/Post';
import { PostProps } from './components/Post';

export default function Home() {

  const posts: PostProps[] = [
  {
    user: { username: 'rbeggs' },
    date: 'September 19',
    description: `          
          In response to the growing homelessness crisis in San Francisco, a
          local nonprofit organization, Code Tenderloin, has launched a
          comprehensive initiative aimed at providing long-term solutions for
          individuals experiencing homelessness. The organization, founded in
          2015, is dedicated to addressing both immediate needs and underlying
          causes of homelessness through a combination of shelter services, job
          training programs, and mental health support. Read more online:
          https://www.codetenderloin.org/`,
    likes: 256,
    img: 'https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg',
    comments: { comments: [
      {
        user: { username: 'daviddd' },
        date: 'September 20',
        description: `This organization is doing amazing work tackling the complex root causes of the issue.`
      },
      {
        user: { username: 'vppraggie' },
        date: 'September 21',
        description: `Thanks for sharing!`
      },
    ]},
  },
  {
    user: { username: 'rbeggs' },
    date: 'September 19',
    description: `          
          In response to the growing homelessness crisis in San Francisco, a
          local nonprofit organization, Code Tenderloin, has launched a
          comprehensive initiative aimed at providing long-term solutions for
          individuals experiencing homelessness. The organization, founded in
          2015, is dedicated to addressing both immediate needs and underlying
          causes of homelessness through a combination of shelter services, job
          training programs, and mental health support. Read more online:
          https://www.codetenderloin.org/`,
    likes: 256,
    img: 'https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg',
    comments: { comments: [
      {
        user: { username: 'daviddd' },
        date: 'September 20',
        description: `This organization is doing amazing work tackling the complex root causes of the issue.`
      },
      {
        user: { username: 'vppraggie' },
        date: 'September 21',
        description: `Thanks for sharing!`
      },
    ]},
  }
  ]

  return (
    <main className={styles.main}>
      <div className={styles.contentwrapper}>
      <div className={styles.content}>
        <Header/>

        {posts.map((post) => (
          <Post {...post}/>
        ))}
      </div>

      </div>
    </main>
  );
}
