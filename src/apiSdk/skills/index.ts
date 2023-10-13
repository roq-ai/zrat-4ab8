import queryString from 'query-string';
import { SkillInterface, SkillGetQueryInterface } from 'interfaces/skill';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSkills = async (query?: SkillGetQueryInterface): Promise<PaginatedInterface<SkillInterface>> => {
  return fetcher('/api/skills', {}, query);
};

export const createSkill = async (skill: SkillInterface) => {
  return fetcher('/api/skills', { method: 'POST', body: JSON.stringify(skill) });
};

export const updateSkillById = async (id: string, skill: SkillInterface) => {
  return fetcher(`/api/skills/${id}`, { method: 'PUT', body: JSON.stringify(skill) });
};

export const getSkillById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/skills/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteSkillById = async (id: string) => {
  return fetcher(`/api/skills/${id}`, { method: 'DELETE' });
};
