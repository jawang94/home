import withAuth from '../../../utils/withAuth';
import Sidebar from './Component';

const SidebarContainer = withAuth(Sidebar);

export default SidebarContainer;
