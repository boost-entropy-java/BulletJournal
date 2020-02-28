import { actions } from './reducer';
import { Project } from './interfaces';
import { ProjectType } from './constants';
export const updateProjects = () => actions.projectsUpdate({});
export const createProjectByName = (
  description: string,
  groupId: number,
  name: string,
  projectType: ProjectType
) =>
  actions.createProject({
    description: description,
    groupId: groupId,
    name: name,
    projectType: projectType
  });
export const getProject = (projectId: number) =>
  actions.getProject({ projectId: projectId });
export const updateSharedProjectsOrder = (projectOwners: string[]) =>
  actions.updateSharedProjectsOrder({ projectOwners: projectOwners });
export const deleteProject = (projectId: number, name: string) =>
  actions.deleteProject({ projectId: projectId, name: name });
export const updateProject = (
  projectId: number,
  description: string,
  groupId: number,
  name: string
) =>
  actions.patchProject({
    projectId: projectId,
    description: description,
    groupId: groupId,
    name: name
  });
export const updateProjectRelations = (projects: Project[]) => {
  actions.updateProjectRelations({ projects: projects });
};
