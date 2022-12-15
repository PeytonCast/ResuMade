export const getResumeId = (resumeID) => {
  const savedResumesIds = localStorage.getItem('saved_resume')
  ? JSON.parse(localStorage.getItem('saved_resume'))
  : [];

  return savedResumesIds;
};

// export const storeResumeId = (resumeID) => {
//   const savedResumesIds = localStorage.setItem('saved_resume', JSON.stringify(resumeID))

//   return savedResumesIds;
// };

// export const deleteResumeId = (resumeID) => {
//     const resumeListIds = localStorage.getItem('resume_List')
//       ? JSON.parse(localStorage.getItem('resume_List'))
//       : null;
  
//     if (!resumeListIds) {
//       return false;
//     }
  
//     const updatedResumeListIds = resumeListIds?.filter((resumeID) => updatedResumeListIds !== resumeId);
//     localStorage.setItem('resume_List', JSON.stringify(updatedResumeListIds));
  
//     return true;
//   };