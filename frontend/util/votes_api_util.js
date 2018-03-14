export const upvote = (entity, entityId) => {
  return (
    $.ajax({
      method: 'PATCH',
      url: `api/${entity}/downvote/${entityId}`,
      data: {entity}
    })
  );
};

export const downvote = (entity, entityId) => {
  return (
    $.ajax({
      method: 'PATCH',
      url: `api/${entity}/downvote/${entityId}`,
      data: {entity}
    })
  );
};
