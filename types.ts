
export interface MenuItem {
  name: string;
  description: string;
}

export interface MenuCourse {
  course: string;
  items: MenuItem[];
}
