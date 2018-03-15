export const upvote = (type, entity, entityId) => {
  return (
    $.ajax({
      method: 'PATCH',
      url: `api/${type}/upvote/${entityId}`,
      data: {entity}
    })
  );
};

export const downvote = (type, entity, entityId) => {
  return (
    $.ajax({
      method: 'PATCH',
      url: `api/${type}/downvote/${entityId}`,
      data: {entity}
    })
  );
};
