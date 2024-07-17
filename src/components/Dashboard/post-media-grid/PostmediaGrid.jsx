import React from 'react'
import { PiMicrosoftPowerpointLogo } from 'react-icons/pi'
import { SiMicrosoftword, SiMicrosoftexcel } from 'react-icons/si'
import { FaFileAlt } from 'react-icons/fa'
import {
  BsFillFileEarmarkPdfFill,
  BsAndroid2,
  BsFiletypeExe,
} from 'react-icons/bs'
import './media-grid.css'
import { IoCloudDownloadSharp } from 'react-icons/io5'

const RenderMedia = ({ mediaFile }) => {
  const renderFileIcon = (fileType) => {
    if (fileType?.endsWith('pdf')) {
      return <BsFillFileEarmarkPdfFill className='icon-dw pdf' size={40} />
    }
    if (
      fileType?.endsWith('doc') ||
      fileType?.endsWith('docx') ||
      fileType?.endsWith('document')
    ) {
      return <SiMicrosoftword className='icon-dw word' size={40} />
    }
    if (fileType?.endsWith('xls') || fileType?.endsWith('xlsx')) {
      return <SiMicrosoftexcel className='icon-dw excel' size={40} />
    }
    if (fileType?.endsWith('ppt')) {
      return <PiMicrosoftPowerpointLogo className='icon-dw prese' size={40} />
    }
    if (fileType?.endsWith('exe')) {
      return <PiMicrosoftPowerpointLogo className='icon-dw prese' size={40} />
    }
    if (fileType?.endsWith('apk')) {
      return <BsAndroid2 className='icon-dw apk' size={40} />
    }
    return <FaFileAlt className='icon-dw default' size={40} />
  }
  if (mediaFile?.file_type?.includes('audio')) {
    const fileName = mediaFile.file.split('/')[3]
    return (
      <div className='media-item-container'>
        <audio controls>
          {/* <source src={domainUrl + mediaFile.file} type={mediaFile.file_type} /> */}
          <source src={mediaFile.file} type={mediaFile.file_type} />
        </audio>
      </div>
    )
  }
  if (mediaFile?.file_type?.includes('image')) {
    return (
      <img
        src={mediaFile.file}
        alt=''
        className='media-item-container !h-full'
      />
    )
  }
  if (mediaFile?.file_type?.includes('video')) {
    return (
      <video controls className='media-item-container !h-full '>
        <source src={mediaFile.file} type={mediaFile.file_type} />
        Your browser does not support the video tag.
      </video>
    )
  }
  if (mediaFile?.file_type?.includes('application')) {
    const fileName = mediaFile.file.split('/')[3]
    return (
      <div className='documentmedia mediaitem-container !px-4'>
        <div className='flex !w-full justify-between px-3 items-center gap-4'>
          <div className='flex gap-4 items-center'>
            <div>{renderFileIcon(mediaFile?.file)}</div>
            <div className='!text-black'>{fileName}</div>
          </div>
          <a
            href={mediaFile.file}
            target='_blank'
            rel='noopener noreferrer'
            download
            className='document-media-btn !bg-[#4F0DA3] !px-3'
          >
            <IoCloudDownloadSharp /> Download
          </a>
        </div>
      </div>
    )
  }
}

const PostmediaGrid = ({ media }) => {
  return (
    <>
      {media?.length === 1 && (
        <div className='post-media-container post-media-single-grid  '>
          <RenderMedia mediaFile={media[0]} />
        </div>
      )}

      {media?.length === 2 && (
        <div className='post-media-container post-media-double-grid'>
          {media?.map((item) => (
            <RenderMedia mediaFile={item} />
          ))}
        </div>
      )}
      {media?.length === 3 && (
        <div className='post-media-container post-media-triple-grid'>
          {media?.map((item) => (
            <RenderMedia mediaFile={item} />
          ))}
        </div>
      )}

      {media?.length === 4 && (
        <div className={`post-media-container post-media-grid`}>
          {media?.map((item) => (
            <RenderMedia mediaFile={item} />
          ))}
        </div>
      )}

      {media?.length > 4 && (
        <div className={`post-media-container grid-with-overlay`}>
          {media?.slice(0, 3).map((item) => (
            <RenderMedia mediaFile={item} />
          ))}
          {media?.length > 4 && (
            <div className='grid-media-overlay-item'>
              <RenderMedia mediaFile={media[3]} />
              <div className='grid-media-count'>+ {media?.length - 3}</div>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default PostmediaGrid
