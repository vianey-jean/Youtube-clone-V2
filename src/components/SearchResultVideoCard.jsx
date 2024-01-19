import React from 'react';
import { abbreviateNumber } from 'js-abbreviation-number';
import { Link } from 'react-router-dom';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import VideoLength from '../shared/videoLength';

const SearchResultVideoCard = ({ video }) => {

  return (

    <Link to={`/video/${video?.videoId}`}>
      <div className='flex flex-col md:flex-row mb-8 md:mb-3 lg:hover:bg-white/[0.18] rounded-xl md:p-4'>
        <div className='relative flex shrink-0 h-48 md:h-28 lg:h-40 xl:h-48 w-full md:w-48 lg:w-64 xl:w-[340px] bg-slate-800 rounded-xl overflow-hidden'>
          <img
            className='h-full w-full object-cover'
            src={video?.thumbnails?.[0]?.url}
            alt={`Vidéo de : ${video?.author?.title}`}
          />
          {video.lengthSeconds && (
            <VideoLength time={video?.lengthSeconds} />
          )}
        </div>

        <div className="flex flex-col ml-4 md:ml-6 mt-4 md:mt-0 overflow-hidden">
          <span className='text-lg font-semibold line-clamp-2 text-white'>
            {video?.title}
          </span>

          <span className='empty:hidden text-sm line-clamp-1 md:line-clamp-2 text-white/[0.7] md:pr-24 md:my-4'>
            {video?.descriptionSnippet}
          </span>

          <div className='hidden md:flex items-center'>
            <div className='flex items-start mr-3'>
              <div className='flex h-9 w-9 rounded-full overflow-hidden'>
                <img
                  className='h-full w-full object-cover'
                  src={video?.author?.avatar[0]?.url} 
                  alt={`Avatar de ${video?.author?.title}`}
                  />                 
              </div>
            </div>

            <div className='flex flex-col'>
              <span className='flex items-center text-sm font-semibold mt-2 text-white/[0.7] '>
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill className='text-white/[0.5] text-[12px] ml-1' />
              )}
              </span>
              <div className="flex text-sm font-semibold text-white/[0.7] truncate overflow-hidden">
              <span>
                {`${abbreviateNumber(video?.stats?.views, 2)} vues`}
              </span>
              <span className='flex text-[25px] leading-none text-white/[0.7] relative top-[-10px] mx-1'>
                .
              </span>
              <span className="truncate">
                {video?.publishedTimeText}
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>

  )
}

export default SearchResultVideoCard
