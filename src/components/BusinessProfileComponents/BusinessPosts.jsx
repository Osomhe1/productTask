import BusinessPost from './BusinessPost';

const BusinessPosts = () => {
  return (
    <div className='posts'>
      {Array.from({ length: 10 }, (_, i) => i + 1).map((arr) => (
        <BusinessPost key={arr} />
      ))}
    </div>
  );
};

export default BusinessPosts;
