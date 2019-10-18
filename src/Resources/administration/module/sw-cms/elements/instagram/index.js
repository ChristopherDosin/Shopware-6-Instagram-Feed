import { Application } from 'src/core/shopware';
import './component';
import './config';
import './preview';

Application.getContainer('service').cmsService.registerCmsElement({
    name: 'instagram',
    label: 'Instagram',
    component: 'sw-cms-el-instagram',
    configComponent: 'sw-cms-el-config-instagram',
    previewComponent: 'sw-cms-el-preview-instagram'
});
