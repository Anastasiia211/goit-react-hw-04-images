import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ColorRing } from 'react-loader-spinner';
import { searchImage } from 'api';
import toast, { Toaster } from 'react-hot-toast';


export class App extends Component {
    state = {
        query: '',
        page: 1,
        perPage: 12,
        imagesItems: [],
        loading: false,
        error: false,
        loadMore: false,
    };

    
    async componentDidUpdate(prevProps, prevState) {
        if (
            prevState.query !== this.state.query ||
            prevState.page !== this.state.page
        ) {
            try {
                this.setState({ loading: true, error: false });
                const images = await searchImage(
                    this.state.page,
                    this.state.perPage,
                    this.state.query
                );

                this.setState(prevState => {
                    return {
                        imagesItems: [...prevState.imagesItems, ...images.hits],
                        loadMore:
                            this.state.page <
                            Math.ceil(images.totalHits / this.state.perPage),
                    };
                });
            
                if (images.hits < 1) {
                    toast.error('There are no entries. Try again');
                }
            } catch (error) {
                this.setState({ error: true });
            } finally {
                this.setState({ loading: false });
            }
        }
    }
    
    handlerSubmit = evt => {
    this.setState({
      imagesItems: [],
      query: evt.search,
      page: 1,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    console.log(this.state);
    const { imagesItems } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handlerSubmit} />
        {this.state.imagesItems.length > 0 && (
          <ImageGallery items={imagesItems} />
        )}
        {this.state.loading && (
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

        {this.state.loadMore && (
          <div className="wrapper">
            <button
              type="button"
              className="btn btn-outline"
              onClick={this.handleLoadMore}
            >
              Load more
            </button>
          </div>
        )}

        <Toaster position="top-right" />
      </>
    );
  }
}
  
            
        