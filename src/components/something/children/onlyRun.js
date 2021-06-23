console.log('run-only')

export const queryCompanyApplyInfoMock = () =>
  Promise.resolve({
    '@id': '@id:60fa08e9-2504-4f74-bf72-aa0a73252970',
    dynamicFields: {
      formGroup_24001: [],
      '@id': '@id:50adafd2-9543-4916-823f-6c09f1ab8a66',
    },
    companyId: 174007,
    company: {
      '@id': '@id:68dacf56-6b59-48dd-88fc-867b6ce91874',
      id: 174007,
      createdAt: 1623293978000,
      updatedAt: 1623293978000,
      createdBy: {
        '@id': '@id:d1c0143c-b3a0-4bec-a9bc-1484dc7d6b9b',
        id: 1,
      },
      updatedBy: {
        '@id': '@id:eba3c2bb-aaf2-4493-a4a7-ee345143e992',
        id: 1,
      },
      companyName: 'bhjdsajhdjasgdj', //ok
      region: {
        '@id': '@id:e3292105-53f2-4f4e-baed-575fc1196d62',
        id: 100000,
      },
      currency: {
        '@id': '@id:786afe3c-0a53-4f53-9960-89b99d0a06ed',
        id: 102001,
      },
      organizationType: 'ENTERPRISE',
      companyCorporation: '登记卡生地会考',
      socialCreditCode: 'dashddsadasd',
      companyType: 'DEALER',
      parentCompany: {
        '@id': '@id:d0119f2a-e939-458a-9761-c70b43e61fe1',
        id: 174006,
      },
      companyStatus: 'DRAFT',
      archiveStatus: 'CREATED',
      district: {
        '@id': '@id:6179e91d-9624-4582-8663-6cc4251d24ef',
        id: 110103,
      },
      isUnifiedCode: true,
      companyAttachment: {
        files: [
          {
            name: '5562.jpg_wh300.jpg',
            url: '//terminus-trantor.oss-cn-hangzhou.aliyuncs.com/trantor/attachments/9bb59335-7959-4968-8a1a-4adedeeec761.jpg',
            type: 'jpg',
          },
        ],
      },
      foundDate: 1623254400000,
      taxpayersType: 'GENERAL_TAXPAYER',
      taxpayersNum: 'dashddsadasd',
      merchantCode: 'merchant202106100000002',
      verifyStatus: 'PENDING',
      isDeleted: false,
      deletedAt: 0,
    },
  })
