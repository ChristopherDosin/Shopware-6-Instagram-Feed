import { Component, Mixin } from 'src/core/shopware';
import template from './sw-cms-el-instagram.html.twig';
import './sw-cms-el-instagram.scss';

Component.register('sw-cms-el-instagram', {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('instagram');
        }
    }
});
