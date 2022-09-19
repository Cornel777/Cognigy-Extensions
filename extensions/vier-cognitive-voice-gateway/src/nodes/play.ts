import { createNodeDescriptor, INodeFunctionBaseParams } from '@cognigy/extension-tools/build';
import t from '../translations';

export interface IPlayParams extends INodeFunctionBaseParams {
  config: {
    url: string,
    bargeIn?: boolean
  };
}

export const playNode = createNodeDescriptor({
  type: 'playAudioFile',
  defaultLabel: t.play.nodeLabel,
  summary: t.play.nodeSummary,
  appearance: {
    color: '#678465'
  },
  tags: ['message'],
  fields: [
    {
      type: 'text',
      key: 'url',
      label: t.play.inputUrlLabel,
      description: t.play.inputUrlLabelDescription,
      params: {
        required: true,
        placeholder: '',
      }
    },
    {
      type: 'checkbox',
      key: 'bargeIn',
      label: t.shared.inputBargeInLabel,
      description: t.play.inputBargeInDescription,
      defaultValue: false,
    }
  ],
  sections: [
    {
      key: 'general',
      fields: ['url'],
      label: t.forward.sectionGeneralLabel,
      defaultCollapsed: false,
    },
    {
      key: 'additional',
      fields: ['bargeIn'],
      label: t.forward.sectionAdditionalSettingsLabel,
      defaultCollapsed: true,
    }
  ],
  form: [
    {
      key: 'general',
      type: 'section',
    },
    {
      key: 'additional',
      type: 'section'
    }
  ],
  function: async ({ cognigy, config }: IPlayParams) => {
    const { api } = cognigy;

    api.say('', {
      status: 'play',
      ...config,
    });
  }
});
