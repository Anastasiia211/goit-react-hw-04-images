import { useEffect,useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ColorRing } from 'react-loader-spinner';
import { searchImage } from 'api';
import toast, { Toaster } from 'react-hot-toast';


export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [imagesItems, setImagesItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadMore,setLoadMore] =useState(false);

  const perPage = 12;
  
useEffect(() => {
    if (query === '') {
      return;
  }
  
  async function addImage() {
            try {
              setLoading(true);
              setError(false);
              const images = await searchImage(page, perPage, query);
              setImagesItems(prevState => [...prevState, ...images.hits]);
              setLoadMore(page < Math.ceil(images.totalHits / perPage));
                if (images.hits < 1) {
                    toast.error('There are no entries. Try again');
                }
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
    }
  }
  
      addImage();
  }, [page, query]);
    
    const handlerSubmit = evt => {
      setImagesItems([]);
      setQuery(evt.search.trim());
      setPage(1);
    };
  

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
    };
    

    return (
      <>
        <Searchbar onSubmit={handlerSubmit} />
         {error && <p>Whoops! Error! Please reload this page!</p>}
        {imagesItems.length > 0 && (
          <ImageGallery items={imagesItems} />
        )}
        {loading && (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        )}

        {loadMore && (
          <div className="wrapper">
            <button
              type="button"
              className="btn btn-outline"
              onClick={handleLoadMore}
            >
              Load more
            </button>
          </div>
        )}

        <Toaster position="top-right" />
      </>
  );
};

  
            
        
  
            
        