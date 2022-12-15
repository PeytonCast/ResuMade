export const getSavedResumeIds = () => {
  const savedResumesIds = localStorage.getItem('saved_resume')
  ? JSON.parse(localStorage.getItem('saved_resume'))
  : [];

  return savedResumesIds;
};

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