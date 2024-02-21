import React from 'react';
import './post.css';
import { Link } from "react-router-dom"

const posts = [
  {
    id: 1,
    imageUrl: 'https://variety.com/wp-content/uploads/2022/07/Music-Streaming-Wars.jpg?w=1024',
    categories: ['Music', 'Life'],
    title: 'The Soundtrack of Our Lives: How Music Defines Our Memories and Experiences',
    createdAt: new Date(),
    desc: "Music has a unique ability to transport us back in time and evoke memories of specific moments in our lives. Whether it's a song that reminds us of a first love, a road trip with friends, or a special family gathering, music has the power to bring back vivid memories and emotions. It's no wonder that many of us have a personal soundtrack that accompanies us throughout our lives."
  },
  {
    id: 2,
    imageUrl: 'data:image/jpeg;base64,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',
    categories: ['Music', 'Life'],
    title: 'From Notes to Narratives: How Music Tells the Stories of Our Lives',
    createdAt: new Date(),
    desc: "Music has the ability to tell stories and convey emotions in a way that words alone cannot. Whether it's through the lyrics of a song, the melody of a symphony, or the rhythm of a dance, music has the power to transport us to different times and places. It can evoke a wide range of emotions, from joy and excitement to sadness and nostalgia. In this way, music becomes a narrative of our lives, telling the story of who we are and where we've been."
  },
  {
    id: 3,
    imageUrl: 'https://i0.wp.com/blog.procollabs.com/wp-content/uploads/school-1063561_1920.jpg?fit=1920%2C1417&ssl=1',
    categories: ['Music', 'Life'],
    title: "Finding Harmony: Balancing Music and Life's Responsibilities",
    createdAt: new Date(),
    desc: "In today's fast-paced world, it can be challenging to find time for the things we love, like music. However, finding a balance between our responsibilities and our passions is essential for our overall well-being. Whether it's setting aside time each day to practice an instrument or attending a concert on the weekend, making music a priority in our lives can bring us joy and fulfillment."
  },
  {
    id: 4,
    imageUrl: 'https://inspirechange1.files.wordpress.com/2011/11/1953_1953_5.png',
    categories: ['Music', 'Life'],
    title: 'The Power of Music: How It Shapes Our Lives and Influences Our Emotions',
    createdAt: new Date(),
    desc: "Music is a universal language that transcends cultural boundaries and speaks to the human soul. It has the power to evoke a wide range of emotions, from joy and excitement to sadness and nostalgia. Whether it's a catchy pop tune, a soulful ballad, or a powerful symphony, music has the ability to touch us in ways that words alone cannot."
  },
  {
    id: 5,
    imageUrl: 'https://mms.businesswire.com/media/20220105005401/en/1318997/23/HEAL_Logo-3904%C3%971249-75KB.jpg',
    categories: ['Music', 'Life'],
    title: "The Healing Power of Music: How It Can Help Us Cope with Life's Challenges",
    createdAt: new Date(),
    desc: "Music has long been recognized for its therapeutic benefits. Whether it's listening to a soothing melody to calm our nerves, playing an instrument to express our emotions, or singing along to our favorite songs to lift our spirits, music has the power to heal. It can provide comfort during difficult times and help us cope with life's challenges."
  },
  
];

const Post = () => {
  return (
    <div className="posts">
      {posts.map(post => (
        <div key={post.id} className="post">
          <img className="post-img" src={post.imageUrl} alt={post.title} />
          <div className="post-info">
            <div className="post-cats">
              {post.categories.map(cat => (
                <span key={cat} className="post-cat">{cat}</span>
              ))}
            </div>
            <span className="post-title">
              <Link to={`/single/${post.id}`}>
                {post.title}
              </Link>
            </span>

            <hr />
            <span className="post-date">{post.createdAt.toDateString()}</span>
            <div className="post-desc">

              <p>{post.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
