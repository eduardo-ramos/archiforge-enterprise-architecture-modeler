
// Using string enums for easier debugging and potential backend mapping.

export enum ArchiLayer {
  STRATEGY = 'Strategy',
  BUSINESS = 'Business',
  APPLICATION = 'Application',
  TECHNOLOGY = 'Technology',
  PHYSICAL = 'Physical',
  IMPLEMENTATION_MIGRATION = 'Implementation & Migration',
  MOTIVATION = 'Motivation',
}

export enum ArchiElementType {
  // Business Layer
  BUSINESS_ACTOR = 'BusinessActor',
  BUSINESS_ROLE = 'BusinessRole',
  BUSINESS_PROCESS = 'BusinessProcess',
  BUSINESS_SERVICE = 'BusinessService',

  // Application Layer
  APPLICATION_COMPONENT = 'ApplicationComponent',
  APPLICATION_SERVICE = 'ApplicationService',
  APPLICATION_FUNCTION = 'ApplicationFunction',
  
  // Technology Layer
  NODE = 'Node',
  TECHNOLOGY_SERVICE = 'TechnologyService',
  
  // Motivation
  STAKEHOLDER = 'Stakeholder',
  DRIVER = 'Driver',
  GOAL = 'Goal',
}

export enum ArchiRelationshipType {
  // Structural
  COMPOSITION = 'Composition',
  AGGREGATION = 'Aggregation',
  ASSIGNMENT = 'Assignment',
  REALIZATION = 'Realization',

  // Dependency
  SERVING = 'Serving',
  ACCESS = 'Access',
  INFLUENCE = 'Influence',

  // Dynamic
  TRIGGERING = 'Triggering',
  FLOW = 'Flow',
}

export interface ArchiElement {
  id: string;
  type: ArchiElementType;
  name: string;
  description?: string;
  x: number;
  y: number;
}

export interface ArchiRelationship {
  id: string;
  type: ArchiRelationshipType;
  name?: string;
  source: string;
  target: string;
}
