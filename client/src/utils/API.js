// export const deleteResume = (resumeID) => {
//     return fetch(`/api/user/resume/${resumeID}`, {
//       method: 'DELETE',
      
//     });
//   };

export const deleteResumeId = (resumeId) => {
    const resumeListIds = localStorage.getItem('resume_List')
      ? JSON.parse(localStorage.getItem('resume_List'))
      : null;
  
    if (!resumeListIds) {
      return false;
    }
  
    const updatedResumeListIds = resumeListIds?.filter((resumeId) => updatedResumeListIds !== resumeId);
    localStorage.setItem('resume_List', JSON.stringify(updatedResumeListIds));
  
    return true;
  };