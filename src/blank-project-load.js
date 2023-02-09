export const blankProjectLoad = () => {
    console.log("called blankProjectLoad module...creating blank project array now");
    let projectsArray = [];
    console.log("Pushing the title name of project to the projectArray....");
    let projectTitle = "default Project";
    projectsArray.push({ projectTitle});
    console.log(projectsArray);
    return { projectsArray, projectTitle};
}