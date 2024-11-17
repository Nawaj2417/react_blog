import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function Createpostcontent({formData,setFormData,name}) {
    
    
     
    
  return (
    <Editor
      apiKey='adcqj94qbelb4hxl3u8hliljc3kyf2ceq2flqhen709xvi3b'
      init={{
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
      }}
      // initialValue={formData[name]}
      value={formData.content}
      onEditorChange={(newContent) => setFormData({...formData,[name]:newContent})}
    />
  );
}