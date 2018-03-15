export const upvote = (type, entity, entityId) => {
  return (
    $.ajax({
      method: 'PATCH',
      url: `api/${type}/upvote/${entityId}`,
      data: {
        entity,
        type
      }
    })
  );
};

export const downvote = (type, entity, entityId) => {
  return (
    $.ajax({
      method: 'PATCH',
      url: `api/${type}/downvote/${entityId}`,
      data: {
        entity,
        type
      }
    })
  );
};
